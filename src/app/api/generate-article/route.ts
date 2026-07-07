import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { generateArticle, type GenerateInput } from "@/lib/generate-article";

export const runtime = "nodejs";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

// Mirror of the loader's extraction in src/lib/articles.ts — used to verify the
// generated file will actually parse and load BEFORE we write it to disk.
function parsesBack(mdx: string): boolean {
  const match = mdx.match(/export\s+const\s+meta\s*=\s*(\{[\s\S]*?\})\s*;?/m);
  if (!match) return false;
  try {
    const meta = new Function(`return ${match[1]}`)() as Record<string, unknown>;
    return typeof meta.title === "string" && (meta.title as string).length > 0;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<GenerateInput> & { save?: boolean };

    if (!body.source || typeof body.source !== "string" || !body.source.trim()) {
      return NextResponse.json(
        { error: "Provide a non-empty 'source' string to ground the article on." },
        { status: 400 },
      );
    }

    const result = await generateArticle({
      source: body.source,
      city: body.city,
      category: body.category,
      author: body.author,
      format: body.format,
      model: body.model,
    });

    // Generate-only mode: return the MDX, write nothing.
    if (!body.save) {
      return NextResponse.json({ ...result, saved: false });
    }

    // Save mode: validate, then write into the right lowercase city folder.
    if (!parsesBack(result.mdx)) {
      return NextResponse.json(
        { error: "Generated MDX failed the parse check (likely a stray '}' in a meta field). Not saved.", ...result },
        { status: 422 },
      );
    }

    const cityFolder = (result.meta.city || "europe").toLowerCase();
    const dir = path.join(ARTICLES_DIR, cityFolder);
    fs.mkdirSync(dir, { recursive: true });

    const filePath = path.join(dir, `${result.slug}.mdx`);
    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: `A file already exists at ${cityFolder}/${result.slug}.mdx — refusing to overwrite.`, ...result },
        { status: 409 },
      );
    }

    fs.writeFileSync(filePath, result.mdx, "utf-8");

    return NextResponse.json({
      ...result,
      saved: true,
      file: `src/content/articles/${cityFolder}/${result.slug}.mdx`,
      url: `/articles/${result.slug}`,
    });
  } catch (err) {
    console.error("[generate-article]", err);
    const messageText = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: messageText }, { status: 500 });
  }
}

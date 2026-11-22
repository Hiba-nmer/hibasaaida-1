import { describe, expect, it } from "vitest";
import { assetUrl } from "@/lib/assets";

describe("public media URLs", () => {
  it("uses the public media host instead of the local preview server", () => {
    expect(assetUrl({ url: "/__l5e/assets-v1/asset-id/perfume.mp4" })).toBe(
      "https://hibasaaida.lovable.app/__l5e/assets-v1/asset-id/perfume.mp4",
    );
  });

  it("preserves an already absolute media URL", () => {
    const url = "https://hibasaaida.lovable.app/__l5e/assets-v1/asset-id/photo.png";
    expect(assetUrl({ url })).toBe(url);
  });
});

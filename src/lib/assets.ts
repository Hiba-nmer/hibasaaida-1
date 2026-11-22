type AssetPointer = {
  url: string;
};

// Lovable's public asset endpoint also works in local previews and GitHub Pages,
// where a root-relative /__l5e URL would otherwise resolve to the wrong server.
const PUBLIC_ASSET_ORIGIN = "https://hibasaaida.lovable.app";

export const assetUrl = (asset: AssetPointer) => new URL(asset.url, PUBLIC_ASSET_ORIGIN).toString();

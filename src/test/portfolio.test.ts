import { describe, expect, it } from "vitest";
import { caseStudies, experiences, supportingProjects } from "@/content/portfolio";
import { directionFor } from "@/lib/language";

describe("portfolio case studies", () => {
  it("groups the marketing research methodology with the laundry app plan", () => {
    const laundry = caseStudies.find((project) => project.id === "laundry");

    expect(laundry?.deliverables.map((item) => item.file)).toEqual([
      "/files/Laundry_App_Marketing_Plan.pptx",
      "/files/Marketing_Research_Methodology.pdf",
    ]);
    expect(supportingProjects.some((project) => project.id === "research")).toBe(false);
  });

  it("keeps Arabic content right-to-left and English content left-to-right", () => {
    expect(directionFor("ar")).toBe("rtl");
    expect(directionFor("en")).toBe("ltr");
  });

  it("preserves the verified Bank of Palestine result", () => {
    const bank = experiences.find((item) => item.company.en === "Bank of Palestine");
    expect(bank?.tags.some((tag) => tag.en === "35 Accounts / Day")).toBe(true);
  });

  it("uses the latest completed Karunya training dates", () => {
    const karunya = experiences.find((item) => item.company.en.includes("Karunya University"));
    expect(karunya?.period.en).toBe("August – September 2026 · Completed");
  });

  it("offers the Arabic Karmol plan without exposing a CV download", () => {
    const karmol = caseStudies.find((project) => project.id === "karmol");
    expect(karmol?.deliverables[0].file).toBe("/files/Karmol_Arabic_Marketing_Plan.pdf");

    const publicFiles = [
      ...caseStudies.flatMap((project) => project.deliverables.map((item) => item.file)),
      ...supportingProjects.flatMap((project) => project.file ? [project.file] : []),
    ];
    expect(publicFiles.some((file) => /cv/i.test(file))).toBe(false);
  });
});

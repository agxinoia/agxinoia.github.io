# Skill: Project to Blog Post Cleanup

This skill defines the process for transforming raw project notes or technical documents into polished, professional blog posts for the "Arki" portfolio.

## Objective
Automatically clean, rework, and format documents dropped into the `src/temp` directory to make them ready for publication.

## Process
When a file is detected in `src/temp`, follow these steps:

1.  **Analyze Content**:
    -   Identify the core technical finding or project goal.
    -   Extract key steps, technologies used, and outcomes.
    -   Determine the most appropriate category (e.g., Homelab, Threat Hunting, Malware Analysis).

2.  **Rework for Narrative**:
    -   **Title**: Create a compelling, minimalist title (max 3-4 words).
    -   **Frontmatter**: Generate standard YAML frontmatter with `title`, `date` (current date), and relevant `tags`.
    -   **Introduction**: Summarize the project's impact and significance.
    -   **"How I Found It"**: Write a detailed, first-person narrative explaining the discovery process. Make it engaging—describe the initial curiosity, the "aha" moment, and the escalation.
    -   **Technical Depth**: Ensure technical details are accurate but presented with premium clarity.

3.  **Enhance with Visualizations**:
    -   **Mermaid Diagrams**: Include at least one Mermaid diagram (flowchart, sequence, or state) to visualize the workflow or logic.
    -   **SVG Visuals**: Include custom SVG charts or severity maps where applicable. Use the "Void" dark aesthetic/ @/Users/arki/blog-trim/src/.skills/design.md (colors like `#f97316`, `#ef4444`, `#ffffff` on `#0a0a0a`).

4.  **Format for "Void" Aesthetic**:
    -   Use proper Markdown hierarchy (H2, H3).
    -   Use blockquotes for emphasis.
    -   Ensure code blocks are correctly labeled with language tags.

5.  **Finalize and Move**:
    -   Save the cleaned post as an `.md` file with a URL-friendly name.
    -   Move the file to the corresponding `src/Categories/[Category Name]/` directory.
    -   Update the `site.html` registry if necessary (though the site uses `hydratePostMetadata` to find new files automatically).
    -   **Clean up**: Delete the original raw file from `src/temp`.

## Example Tone
*Professional, technical, minimalist, and authoritative.*

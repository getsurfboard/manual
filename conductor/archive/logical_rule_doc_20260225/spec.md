# Specification: Add Logical Rule Document

## Overview
Add a new technical reference document for "Logical Rules" (AND, OR, NOT) to the Surfboard profile format documentation. This track includes both English and Simplified Chinese versions.

## Functional Requirements
- Create `docs/profile-format/rule/logical.md` with English content.
- Create `i18n/zh-Hans/docusaurus-plugin-content-docs/current/profile-format/rule/logical.md` with Simplified Chinese content.
- Document the following operators:
    - **AND**: Matches if all sub-rules match.
    - **OR**: Matches if any sub-rule matches.
    - **NOT**: Matches if the sub-rule does not match.
- Each operator documentation must include:
    - Description
    - Syntax Format
    - Parameters Table
    - Practical Examples (including nesting and common use cases)
- **External Reference:** Include a link to the [Surge manual](https://manual.nssurge.com/rule/logical.html) as a technical reference.
- **Overview Update:** Update `docs/profile-format/rule/index.md` (and its translation) to mention the availability of logical rules.

## Non-Functional Requirements
- Maintain a formal and technical tone consistent with existing rule docs.
- Adhere to the established Markdown structure (sidebar_position, headers).

## Acceptance Criteria
- Files exist in both the default and translated documentation paths.
- Content accurately describes the logic and syntax of Surfboard logical rules.
- `yarn build` completes successfully without errors.
- Sidebar displays the new "Logical Rules" item under Profile Format -> Rule.
- `index.md` (English and Chinese) includes a mention of logical rules.

## Out of Scope
- Documentation for other rule types (e.g., Domain, IP).
- Changes to the Surfboard application logic.

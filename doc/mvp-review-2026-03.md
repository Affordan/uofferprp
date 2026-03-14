# Frontend MVP Review (Education Information System)

## 1) MVP coherence verdict

**Overall verdict: coherent as a frontend MVP, but still a "data-demo" product instead of an "information system" product.**

- The current navigation and page set are aligned with the PRD core flow: policies, score query, university library, and compare. Users can move from discovery to filtering to cross-school comparison.
- The feature framing is clear for an MVP: source badge, score-type distinction, filtering, chart/table views, and export actions are all present.
- However, all critical domains are still mock-driven and in-memory filtered on the client side, so trust, freshness, and auditability are not production-grade yet.

## 2) Structural codebase risks

### Blocking risks (for moving from demo to production)

1. **No real data boundary (API/data layer) yet**
   - Feature services read directly from `mock*` datasets instead of typed API contracts.
   - Risk: once real backend arrives, every feature will require broad edits instead of isolated adapter replacement.

2. **Build fragility caused by runtime dependency on Google Fonts fetch**
   - The app imports `Inter` from `next/font/google`; production build can fail in restricted/offline network environments.
   - Risk: CI/CD instability and deploy unpredictability.

3. **Identity model relies on mutable display names**
   - Compare and score linkage use university name strings for joins and URL params.
   - Risk: rename/synonym/normalization issues will create silent data mismatches.

4. **Filter/query logic duplicated across multiple feature services**
   - Similar year/province/university filtering appears in score and compare services separately.
   - Risk: inconsistent logic and higher maintenance cost when rules evolve.

5. **Client-heavy rendering path for future large datasets**
   - Filtering, tabulation, export shaping, and chart inputs are handled in client components over full arrays.
   - Risk: performance degradation and bundle growth when data volume increases.

### Non-blocking structural risks

1. **Styling is largely inline-style driven**
   - Fast for MVP, but can become difficult to enforce consistency and design-system evolution.

2. **Validation/business rules mostly UI-side**
   - E.g., required compare constraints are enforced in page UI flow.
   - Future API endpoints should enforce equivalent invariants server-side.

3. **Warnings already indicate tooling tension**
   - ESLint warns about React Compiler compatibility around TanStack Table hook usage.
   - Not a current outage, but indicates future optimization constraints.

## 3) What to move from mock to real data next (priority order)

1. **Scores dataset + filter endpoint first**
   - Highest user value and core product differentiation.
   - Implement server-backed query by year/province/university/score_type and return normalized records with source metadata.

2. **Policies and source documents second**
   - Trust depends on source traceability; replace policy/doc lists with real official-source ingestion records.

3. **University master data third**
   - Migrate to canonical university IDs and metadata table; stop joining by display name.

4. **Compare should consume the same score query contract**
   - Avoid separate mock compare path; compare = specialized projection over shared score API.

5. **Add data freshness fields everywhere once API exists**
   - Expose updated_at, source_date, and ingestion status for credibility.

## 4) Top 5 most important next tasks

1. **Define and freeze V1 API contracts + DTOs**
   - Endpoints for score list, policy list, university list/detail, and compare query shape.

2. **Introduce a data-access layer in frontend**
   - Wrap all current `mock*` reads behind repository/adapters so backend switch is incremental.

3. **Replace name-based relation with stable IDs end-to-end**
   - URL params, compare selection, score records, and detail linking should all use IDs.

4. **Stabilize build for restricted network environments**
   - Self-host fonts or local fallback to remove remote fetch dependency during build.

5. **Implement observability + error states for real fetching**
   - Add loading/error/retry and empty states from API responses (not only from empty mock arrays).

## 5) What should NOT be refactored yet

1. **Do not over-refactor visual styling architecture yet**
   - Inline styles are acceptable for current MVP velocity; postpone design-token overhaul until API integration stabilizes.

2. **Do not prematurely split into micro-frontends or over-modular packages**
   - Current scope does not justify structural complexity before real data path is proven.

3. **Do not optimize chart/table internals too early**
   - Focus first on correctness and API-backed data semantics; performance work should be based on real dataset size.

4. **Do not introduce full auth/admin workflow in the same sprint as data-source migration**
   - Keep milestone focus: replace mock query path first.

5. **Do not rewrite all client components to server components immediately**
   - Keep interactive filters/exports client-side for now; move only data fetching boundaries first.

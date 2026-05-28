.PHONY: dev build clean deploy audit help

## ── Development ──────────────────────────────────────────────────
dev:                        ## Start local dev server (live reload, http://localhost:1313)
	hugo server --disableFastRender --bind 0.0.0.0

## ── Build ────────────────────────────────────────────────────────
build:                      ## Build site to /public (production, minified)
	hugo --minify

clean:                      ## Remove /public build output
	rm -rf public

rebuild: clean build        ## Clean then full rebuild

## ── Quality ──────────────────────────────────────────────────────
audit:                      ## Check for leftover Lucide icons, em-dashes, broken links
	@echo "=== Lucide CDN references ==="
	@grep -rn "data-lucide\|unpkg.com/lucide" layouts/ || echo "  ✓ None found"
	@echo ""
	@echo "=== Em-dash patterns in partials ==="
	@grep -rn " — \| - " layouts/partials/ || echo "  ✓ None found"
	@echo ""
	@echo "=== Emoji characters ==="
	@grep -Prn "[^\x00-\x7F]" layouts/partials/ | grep -v "middot\|amp\|nbsp\|apos\|quot\|#" || echo "  ✓ None found"
	@echo ""
	@echo "=== Build page count ==="
	@hugo --quiet && echo "  ✓ Build successful"

## ── Help ─────────────────────────────────────────────────────────
help:                       ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*##' Makefile | awk 'BEGIN {FS = ":.*##"}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help

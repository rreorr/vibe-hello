.PHONY: test typecheck clean

test:
	pnpm test

typecheck:
	pnpm exec tsc -p tsconfig.json --noEmit

clean:
	rm -rf node_modules .vite dist

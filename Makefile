.PHONY: setup precommit-setup

setup: precommit-setup

precommit-setup:
	@echo "Setting up pre-commit hook..."
	@echo "#!/bin/bash" > .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "staged_files=\$$(git diff --cached --name-only)" >> .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "# Filter for .ts and .astro files" >> .git/hooks/pre-commit
	@echo "filtered_files=\$$(echo \"\$$staged_files\" | grep -E '\.ts$$|\.astro$$')" >> .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "# Check if there are any staged files" >> .git/hooks/pre-commit
	@echo "if [ -z \"\$$filtered_files\" ]; then" >> .git/hooks/pre-commit
	@echo "    echo \"No files staged for commit.\"" >> .git/hooks/pre-commit
	@echo "    exit 0" >> .git/hooks/pre-commit
	@echo "fi" >> .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "# Format the filtered files using Prettier" >> .git/hooks/pre-commit
	@echo "npx prettier --write \$$filtered_files" >> .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "# Add the formatted files back to the staging area" >> .git/hooks/pre-commit
	@echo "git add \$$filtered_files" >> .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "# Exit successfully" >> .git/hooks/pre-commit
	@echo "exit 0" >> .git/hooks/pre-commit
	@chmod +x .git/hooks/pre-commit
	@echo "Pre-commit hook has been successfully set up."

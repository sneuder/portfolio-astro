.PHONY: setup precommit-setup

setup: precommit-setup

precommit-setup:
	@echo "Setting up pre-commit hook..."
	@echo "#!/bin/bash" > .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "# List files in the staging area" >> .git/hooks/pre-commit
	@echo "staged_files=\$$(git diff --cached --name-only)" >> .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "echo \"Files in the staging area:\"" >> .git/hooks/pre-commit
	@echo "echo \"\$$staged_files\"" >> .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "# Check if there are any staged files" >> .git/hooks/pre-commit
	@echo "if [ -z \"\$$staged_files\" ]; then" >> .git/hooks/pre-commit
	@echo "    echo \"No files staged for commit.\"" >> .git/hooks/pre-commit
	@echo "    exit 0" >> .git/hooks/pre-commit
	@echo "fi" >> .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "# Format the staged files using Prettier" >> .git/hooks/pre-commit
	@echo "npx prettier --write \$$staged_files" >> .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "# Add the formatted files back to the staging area" >> .git/hooks/pre-commit
	@echo "git add \$$staged_files" >> .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "# Inform the user" >> .git/hooks/pre-commit
	@echo "echo \"Formatted and re-staged files: \$$staged_files\"" >> .git/hooks/pre-commit
	@echo "" >> .git/hooks/pre-commit
	@echo "# Exit successfully" >> .git/hooks/pre-commit
	@echo "exit 0" >> .git/hooks/pre-commit
	@chmod +x .git/hooks/pre-commit
	@echo "Pre-commit hook has been successfully set up."

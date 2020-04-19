echo "Removing existing files"
rm -rf public/*

echo "Generating site"
hugo -e production

echo "Updating gh-pages branch"
cd public && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"

echo "Pushing to github"
git push --all
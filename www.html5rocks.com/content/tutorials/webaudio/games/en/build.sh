#!/usr/bin/env bash

# Remove original index.
rm index.html
# Process some stuff.
cat header.html >> index.html
markdown2 index.md >> index.html
cat footer.html >> index.html
# Pretty print everything.
sed -ie 's/<pre>/<pre class="prettyprint">/' index.html

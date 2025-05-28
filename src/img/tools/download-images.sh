#!/bin/bash

# Crear directorio si no existe
mkdir -p src/img/tools

# Descargar logos
curl -o src/img/tools/vscode.svg "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
curl -o src/img/tools/react.svg "https://cdn.worldvectorlogo.com/logos/react-2.svg"
curl -o src/img/tools/nodejs.svg "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg"
curl -o src/img/tools/docker.svg "https://cdn.worldvectorlogo.com/logos/docker.svg"
curl -o src/img/tools/figma.svg "https://cdn.worldvectorlogo.com/logos/figma-1.svg"
curl -o src/img/tools/jest.svg "https://cdn.worldvectorlogo.com/logos/jest-2.svg"
curl -o src/img/tools/postgresql.svg "https://cdn.worldvectorlogo.com/logos/postgresql.svg"
curl -o src/img/tools/postman.svg "https://cdn.worldvectorlogo.com/logos/postman.svg"
curl -o src/img/tools/github.svg "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
curl -o src/img/tools/typescript.svg "https://cdn.worldvectorlogo.com/logos/typescript.svg"
curl -o src/img/tools/aws.svg "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
curl -o src/img/tools/owasp.svg "https://cdn.worldvectorlogo.com/logos/owasp.svg"
curl -o src/img/tools/flutter.svg "https://cdn.worldvectorlogo.com/logos/flutter.svg"
curl -o src/img/tools/tensorflow.svg "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg"
curl -o src/img/tools/githubcopilot.svg "https://cdn.worldvectorlogo.com/logos/github-copilot.svg"
curl -o src/img/tools/vercel.svg "https://cdn.worldvectorlogo.com/logos/vercel.svg"
curl -o src/img/tools/tailwindcss.svg "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"

# Dar permisos de ejecución
chmod +x src/img/tools/download-images.sh 
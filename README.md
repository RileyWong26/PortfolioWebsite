## Building from source code

```
# Get the code
git clone https://github.com/RileyWong26/PortfolioWebsite.git
cd PortfolioWebsite

# Install required dependencies
npm install

# Run using docker
docker compose up
```

## Repo Structure
```
PortfolioWebsite/
├── public/         # Non dynamic images and assets
├── server/         # Back end server code
├── src/app/
|   ├── About/
|   ├── Contact/
|   ├── Experience/
|   ├── Projects/
|   └── three.jsx      # 3D component of the website    
├── README.md
├── Dockerfile
├── compose.yaml
```

SITE_URL=$1
EMAIL=$2
PASS=$3
SCOPE=$4

npm i  -g @pnp/office365-cli
o365 version

o365 spo login $SITE_URL --authType password --userName $EMAIL --password  $PASS 

o365 spo app add --filePath  "./_SPFx build/SPFx sppkg/dev-ops-cicd.sppkg" --appCatalogUrl $SITE_URL --scope $SCOPE --overwrite

o365 spo app deploy --name dev-ops-cicd.sppkg --appCatalogUrl $SITE_URL --scope $SCOPE --skipFeactureDeployment
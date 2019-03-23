ARTIFACT_GROUP_ID=$1;
ARTIFACT_ID=$2;
ARTIFACT_VERSION=$3;

if [ -z "$ARTIFACT_GROUP_ID" ]; then
    ARTIFACT_GROUP_ID=ami.login
    echo "Group id not specified as first program argument... Running with default group id: ami.login"
fi
if [ -z "$ARTIFACT_ID" ]; then
    ARTIFACT_ID=login
    echo "Artifact id not specified as second program argument... Running with default artifact id: login"
fi
if [ -z "$ARTIFACT_VERSION" ]; then
    ARTIFACT_VERSION=0.0.1-SNAPSHOT
    echo "Version not specified as third program argument... Running with default version: 0.0.1-SNAPSHOT"
fi

echo ""
echo "Building login artifact...";
echo ""

echo "groupId: $ARTIFACT_GROUP_ID";
echo "artifactId: $ARTIFACT_ID";
echo "version: $ARTIFACT_VERSION";
echo ""

echo "Starting npm build..."

npm run build

echo "Finished npm build."
echo ""

echo "Creating archive..."

ARCHIVE_NAME="$ARTIFACT_ID.tar.gz"

cd build
tar -czvf ../$ARCHIVE_NAME *
cd ..

echo ""
echo "Archive created."
echo "Installing artifact to local repository..."

mvn install:install-file -Dfile=$ARCHIVE_NAME -DgroupId=$ARTIFACT_GROUP_ID -DartifactId=$ARTIFACT_ID -Dversion=$ARTIFACT_VERSION -Dpackaging=tar.gz

echo ""
echo "Deleting archive..."
rm $ARCHIVE_NAME
echo "Finished!"


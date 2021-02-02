echo "Platform : " $2
echo "Variant founded : " $1 
echo "Replacing google files..."

# ANDROID
if [ $2 = "android" ]
then
    if [[ $1 == *"Develop"* ]]; then
        cp -f google-services/google-services-develop.json ./google-services.json
    elif [[ $1 == *"Staging"* ]]; then
        cp -f google-services/google-services-staging.json ./google-services.json
    elif [[ $1 == *"Production"* ]]; then
        cp -f google-services/google-services-production.json ./google-services.json
    else
        echo "Setting develop by default"
        cp -f google-services/google-services-develop.json ./google-services.json
    fi
fi

# IOS
if [ $2 = "ios" ]
then
    if [ $1 = "com.mahisoft.develop" ]; then
        cp -f GoogleServices/GoogleServiceDevelop-Info.plist GoogleService-Info.plist
    elif [ $1 = "com.mahisoft.staging" ]; then
        cp -f GoogleServices/GoogleServiceStaging-Info.plist GoogleService-Info.plist
    elif [ $1 = "com.mahisoft" ]; then
        cp -f GoogleServices/GoogleServiceProduction-Info.plist GoogleService-Info.plist
    else
        echo "Setting develop by default"
        cp -f GoogleServices/GoogleServiceDevelop-Info.plist GoogleService-Info.plist
    fi
fi

echo "Replacing google files finished."

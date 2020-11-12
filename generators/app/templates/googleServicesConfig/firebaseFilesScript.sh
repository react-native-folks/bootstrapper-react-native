echo "Platform : " $2
echo "Variant founded : " $1 
echo "Replacing google files..."

# ANDROID
if [ $2 = "android" ]
then
    if [[ $1 == *"Develop"* ]]; then
        cp -f google-services/google-services-dev.json ./google-services.json
    elif [[ $1 == *"Stageing"* ]]; then
        cp -f google-services/google-services-stagiing.json ./google-services.json
    elif [[ $1 == *"Prod"* ]]; then
        cp -f google-services/google-services-production.json ./google-services.json
    else
        echo "Setting qa by default"
        cp -f google-services/google-services-dev.json ./google-services.json
    fi
fi

# IOS
if [ $2 = "ios" ]
then
    if [ $1 = "com.kamino.dev" ]; then
        cp -f GoogleServices/GoogleServiceDev-Info.plist GoogleService-Info.plist
    elif [ $1 = "com.kamino.staging" ]; then
        cp -f GoogleServices/GoogleServiceStaging-Info.plist GoogleService-Info.plist
    elif [ $1 = "com.kamino" ]; then
        cp -f GoogleServices/GoogleServiceProduction-Info.plist GoogleService-Info.plist
    else
        echo "Setting qa by default"
        cp -f GoogleServices/GoogleServiceDev-Info.plist GoogleService-Info.plist
    fi
fi

echo "Replacing google files finished."

function iosAppIcons() {
  const appIconFiles = [
    'Contents.json',
    'Icon-29.png',
    'Icon-29@2x.png',
    'Icon-29@3x.png',
    'Icon-20.png',
    'Icon-20@2x.png',
    'Icon-20@3x.png',
    'Icon-40.png',
    'Icon-40@2x.png',
    'Icon-40@3x.png',
    'Icon-60@2x.png',
    'Icon-60@3x.png',
    'Icon-76.png',
    'Icon-76@2x.png',
    'Icon-83.5@2x.png',
    'iTunesArtwork@2x.png'
  ];

  const splashFiles = ['Contents.json', 'SplashIcon.png'];

  appIconFiles.forEach(fileName => {
    this.fs.copy(
      this.templatePath('icons/iosIcons/AppIcon.appiconset', fileName),
      this.destinationPath(
        this.projectName,
        'ios',
        this.projectName,
        'Images.xcassets',
        'AppIcon.appiconset',
        fileName
      )
    );
  });

  splashFiles.forEach(fileName => {
    this.fs.copy(
      this.templatePath('icons/iosIcons/SplashIcon.imageset', fileName),
      this.destinationPath(
        this.projectName,
        'ios',
        this.projectName,
        'Images.xcassets',
        'SplashIcon.imageset',
        fileName
      )
    );
  });
}

function androidAppIcons() {
  this.fs.copy(
    this.templatePath('icons/androidIcons'),
    this.destinationPath(
      this.projectName,
      'android',
      'app',
      'src',
      'main',
      'res'
    )
  );
}

module.exports = function appIcons() {
  iosAppIcons.bind(this)();
  androidAppIcons.bind(this)();
};

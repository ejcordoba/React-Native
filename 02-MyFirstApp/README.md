## File Structure

This project follows the default React Native + TypeScript structure, with additional configuration files for tooling and code quality.

### Root configuration

- **.eslintrc.js**  
  ESLint configuration and code style rules.

- **.gitignore**  
  Files and directories excluded from version control.

- **.prettierrc.js**  
  Prettier configuration for consistent code formatting.

- **.watchmanconfig**  
  Watchman configuration used by React Native for file watching.

- **app.json**  
  Application metadata and basic configuration.

- **App.tsx**  
  Main application component (current UI entry point).

- **babel.config.js**  
  Babel configuration for JavaScript/TypeScript transpilation.

- **Gemfile**  
  Ruby dependencies (mainly used for iOS tooling such as CocoaPods).

- **index.js**  
  Application bootstrap file. Registers the root component.

- **jest.config.js**  
  Jest configuration for testing.

- **metro.config.js**  
  Metro bundler configuration.

- **package.json**  
  Project metadata, scripts, dependencies, and engine requirements.

- **README.md**  
  Project documentation and development notes.

- **tsconfig.json**  
  TypeScript compiler configuration.

- **yarn.lock**  
  Dependency lock file ensuring consistent installs across environments.

---

### Android

- **android/**  
  Native Android project (Gradle-based).

- **android/app/**  
  Main Android application module.

- **android/app/src/main/**  
  Android source files, resources, and manifest.

- **android/app/src/main/AndroidManifest.xml**  
  Android application configuration and permissions.

- **android/app/build.gradle**  
  App-level Gradle configuration.

- **android/build.gradle**  
  Project-level Gradle configuration.

- **android/gradlew / gradlew.bat**  
  Gradle wrapper scripts.

---

### iOS

- **ios/**  
  Native iOS project (Xcode-based).

- **ios/\<AppName\>.xcodeproj**  
  Xcode project configuration.

- **ios/\<AppName\>.xcworkspace**  
  Xcode workspace (used when CocoaPods is installed).

- **ios/\<AppName\>/AppDelegate.swift**  
  Application lifecycle and native initialization.

- **ios/\<AppName\>/Info.plist**  
  iOS application configuration and permissions.

- **ios/Podfile**  
  CocoaPods dependencies configuration.

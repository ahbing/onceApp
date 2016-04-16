# once app

## build

- `react-native run-android`
- `adb reverse tcp:8081 tcp:8081`
- open dev menu on the device and select `Dev Settings`, then update Debug server host for device setting to the IP address of your computer.
- To debug the JavaScript code in Chrome, select `Debug in Chrome` from the developer menu. This will open a new tab at [http://localhost:8081/debugger-ui](http://localhost:8081/debugger-ui)


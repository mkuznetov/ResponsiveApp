# ResponsiveApp
Shows some responsive capabilities of the ExtJS.


Application endpoint:

 /

Device type selection:

 (no params) - actual device type will be detected at runtime, driving the corresponding main view selection

 ?deviceType=Desktop - device is set to Desktop, main desktop view is loaded

 ?deviceType=Phone - device is set to Phone, main phone view is loaded

 ?deviceType=Tablet - device is set to Tablet, main tablet view is loaded


Adjusting to screen width:

 For the Desktop view, the following toolbar items are reacting to the screen width changes:
  "Users"
  "Groups"
  "Settings"


 When selected, the associated view represents the full "Lorem ipsum" message if the device's screen is wider than 600px; otherwise, only first 5 words of the "Lorem ipsum" are displayed.



package com.onceapp;


import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

import java.util.ArrayList;

import android.util.Log;
/**
 * Created by ctyloading on 16/4/15.
 */
public class SystemBootEventReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        Log.i("ReactSystemNotification", "SystemBootEventReceiver: Setting system alarms");

            NotificationManager notificationManager = new NotificationManager(context);
            SharedPreferences sharedPreferences = context.getSharedPreferences(NotificationManager.PREFERENCES_KEY, Context.MODE_PRIVATE);

            ArrayList<Integer> ids = notificationManager.getIDs();

            for (Integer id: ids) {
                try {
                    Notification notification = notificationManager.find(id);

                    if (notification.getAttributes() != null) {
                        notification.cancelAlarm();
                        notification.setAlarmAndSaveOrShow();
                        Log.i("ReactSystemNotification", "SystemBootEventReceiver: Alarm set for: " + notification.getAttributes().id);
                    }
                } catch (Exception e) {
                    Log.e("ReactSystemNotification", "SystemBootEventReceiver: onReceive Error: " + e.getMessage());
                }
            }
    }
}


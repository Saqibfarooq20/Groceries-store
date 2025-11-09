package com.onlinegroceriesapp

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {

    // Step 1: onCreate method add karo
    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this)  // <-- splash screen show karne ke liye
        super.onCreate(savedInstanceState)
    }

    override fun getMainComponentName(): String = "OnlineGroceriesApp"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}

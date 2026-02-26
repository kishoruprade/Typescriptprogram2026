package tests;

import java.awt.Desktop;
import java.net.URI;

public class HelloWorld {

    public static void main(String[] args) {
        String targetUrl = args.length > 0 ? args[0] : "https://www.google.com";

        try {
            if (!Desktop.isDesktopSupported()) {
                System.out.println("Desktop API is not supported on this machine.");
                return;
            }

            Desktop.getDesktop().browse(new URI(targetUrl));
            System.out.println("Browser launched: " + targetUrl);
        } catch (Exception e) {
            System.out.println("Failed to launch browser: " + e.getMessage());
        }
    }
}

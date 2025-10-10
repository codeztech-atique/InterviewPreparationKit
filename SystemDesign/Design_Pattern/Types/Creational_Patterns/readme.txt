🔹 Structural (FABPS) → How to create structure
👉 Mnemonic: “Fabulous Apps Build Perfect Software”
👉 Mnemonic: “Factory And Builder Provide Structure”

🎯 How to Remember With Meaning

 - Factory → Creates one product.
 - Abstract Factory → Creates families of products.
 - Builder → Builds step by step.
 - Prototype → Clones an existing object.
 - Singleton → Single instance only.

👉 Think of it as the lifecycle of making something:

First you have a Factory.

Sometimes you need an Abstract Factory (multiple related factories).

You Build the product.

Then you Prototype it.

Finally, you keep Single master copy.


| #     | Pattern                                   | Common LLD Question / Topic                                                     | Real-world Example / Trigger                                                |
| ----- | ----------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **1** | **Singleton**                             | 🔹 *Design a Logger / Config Manager / DB Connection Pool / Cache Service*      | One instance shared globally (e.g., `Logger.getInstance()`)                 |
| **2** | **Factory / Factory Method**              | 🔹 *Design a Payment Gateway / Notification System / Shape Creator / Parser*    | Create object based on input type (e.g., `PaymentFactory.create("UPI")`)    |
| **3** | **Builder**                               | 🔹 *Design a Resume Builder / Report Generator / Pizza Builder / Query Builder* | Step-by-step creation with optional parameters                              |
| **4** | **Abstract Factory** *(optional if time)* | 🔹 *Design UI Toolkit for different OS themes / Cross-platform App Factory*     | Create related families of objects (e.g., `ButtonFactory → Windows vs Mac`) |
| **5** | **Prototype** *(less common but easy)*    | 🔹 *Design a Document / Shape Cloning System*                                   | Copy an existing object instead of creating from scratch                    |

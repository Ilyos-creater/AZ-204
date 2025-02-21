# Azure Function with Visual Studio Code

## 📌 Overview
This project demonstrates how to create a **C# Azure Function** that responds to HTTP requests. The function is developed locally using **Visual Studio Code**, tested, and then deployed to **Azure**.

## 🛠️ Prerequisites
Before starting, ensure you have the following:
- **Azure Account**: [Sign up for a free Azure account](https://azure.com/free) if you don’t have one.
- **Azure Functions Core Tools (v4.x)** installed
- **Visual Studio Code** with:
  - **C# Extension**
  - **Azure Functions Extension**
- **.NET 8 SDK**

## 🚀 Steps to Create the Function
### 1️⃣ **Set Up a New Azure Functions Project**
1. Open **Visual Studio Code** and press `F1` to open the Command Palette.
2. Search for **Azure Functions: Create New Project...** and select it.
3. Choose a directory for your project (preferably an empty one).
4. Configure the function:
   - **Language**: C#
   - **.NET Runtime**: .NET 8.0 Isolated (LTS)
   - **Template**: HTTP trigger
   - **Function Name**: `HttpExample`
   - **Namespace**: `My.Function`
   - **Authorization Level**: Anonymous (accessible to everyone)
5. Select **Open in current window** when prompted.

### 2️⃣ **Run the Function Locally**
1. Open the **Terminal** in VS Code (`Ctrl + ~` or via the menu `Terminal > New Terminal`).
2. Start debugging by pressing `F5`.
3. The function URL will be displayed in the terminal.
   ```
   http://localhost:7071/api/HttpExample
   ```
4. To test, send a request:
   ```json
   { "name": "Azure" }
   ```
   - Use **Postman** or execute via `curl`:
   ```bash
   curl -X POST "http://localhost:7071/api/HttpExample" -H "Content-Type: application/json" -d '{ "name": "Azure" }'
   ```
5. Stop debugging with `Shift + F5`.

### 3️⃣ **Deploy to Azure**
#### 🔹 **Login to Azure in VS Code**
1. Click the **Azure** icon in the Activity Bar.
2. Select **Sign in to Azure...** and follow the authentication steps.

#### 🔹 **Create Azure Resources**
1. Click the **Azure** icon in VS Code.
2. In the **Resources** section, select **Create Function App in Azure...**.
3. Provide the required information:
   - **Unique function app name**
   - **Runtime stack**: .NET 8.0
   - **Region**: Choose a location near you
4. Azure will create the required resources:
   - **Function App** (for execution)
   - **Storage Account** (for state management)
   - **Consumption Plan** (serverless execution)
   - **Application Insights** (monitoring and logs)

#### 🔹 **Deploy Your Function**
1. Open the Command Palette (`F1`) and search for **Azure Functions: Deploy to Function App...**
2. Select your newly created Function App.
3. Confirm the deployment.
4. After deployment, view the output and retrieve the **live URL**.

### 4️⃣ **Test the Deployed Function in Azure**
1. Expand your Azure Subscription in the **VS Code Azure Panel**.
2. Locate your **Function App > Functions**.
3. Right-click `HttpExample` and choose **Execute Function Now**.
4. Enter the request body:
   ```json
   { "name": "Azure" }
   ```
5. The response will be displayed in VS Code.

## 📢 Notes
- Any changes to the function require **redeployment**.
- Logs and execution details can be found in **Azure Portal > Application Insights**.

## 📜 Summary
✔️ Created and tested an **Azure Function locally**.
✔️ Deployed the function to **Azure**.
✔️ Successfully **executed the function in the cloud**.

🚀 **Mastering Azure Functions with VS Code!** 🚀


# LinguaSense | Context Based Translator with COHERE AI API, React, Node.js with Express.js


<img src="https://github.com/user-attachments/assets/eac60f1e-696f-4437-b0e4-12ab197931f8" alt="Image 1" width="auto" />

<img  align="right" src="https://github.com/user-attachments/assets/db3d0c92-2f61-4072-9f4d-148cd02de9a6" alt="Image 2" width="300" />

<p>With this project, the main purpose was to create a translator that could utilize user-chosen context to make translations more personal, potentially improving accuracy and user satisfaction.</p>

<p>Existing translators such as Google Translate or DeepL both do not offer much in regards to customising translations and the closest thing offered is different variations of translations. 
By introducing the ability to select formal or informal options, the translations may be more accurate to the desired ones that the user requests. Additionally, by offering the option to provide 
even further context, it can make the translations even more personal and accurate and align more closely to the users needs.</p>

<p>There are various features implemented in this project to try and maximise user experience. Users can select the language they want by clicking the corresponding language they wish to change (source language or target language) which reveals a grid dropdowm menu 
revealing 17 of the most popular languages although more can easily be added. Another subtle feature is the ability to switch the source language and the target button by clicking the switch button. Although a subtle feature, it helps with providing users a favourable experience.
Users can select "Informal", "Formal" to switch between the corresponding form of translations they wish to produce. Additionally to that, the "Additional Context" button sets the users focus to the text area for the users to enter their desired context.
Once the buttons are selected, this is indicated by the change in the styling of the buttons and components such as the background color and shadows.</p>

<p>Once a user enters the desired translation text, the output form's (right area) placeholder text changes to indicate to the user that they must click 'Enter' to translate the text. Upon clicking 'Enter', the placeholder again changes to indicate to 
the user that the text is being translated. Eventually, the translated text is outputed there.</p>

## TechStack used
<p>In regards to the frontend of this project, JavaScript and React.js was used to create a responsive and stateless web page following RESTful principles. A global context was created using createContext function from react to make the important data available throughout all components.
With this, changes such as switching the source and target languages also switches the corresponding text to each other. Changes like this can be achieved effortlessly and responsively through the use of the global context. To create Post requests, Node.js with Express.js 
was used as the backend in order to handle these requests. Upon achieving this request, the backend makes a call to the COHERE AI API with the use of the API key (private keys issued to users so need to create a .env file with your private key). the chat function was used
alongside the necessary parameters (such as text and context) to ensure the returned translations are as accurate as possible. Command-r was the model used with a custom calculation of maxTokens, and a value of 0.3 for the temperature value to ensure the translations made 
are not too random. Finally, cors was also incorporated into the backend to allow the frontend to make these requests to the backend.</p>

## Installation
<p>To use this project, create a .env file with the same format as the .evn.example. Within that file, specify the port you wish to use for the backend and the COHERE API key which you can get from here <a href='https://docs.cohere.com/docs/rate-limits'>COHERE API Key</a>
Upon doing this, run the backend using the "node server.js" command in the terminal to intiate the backend. In regards to the frontend, run "npm start" to start the react app. With this, both the backend and the frontend are active and you can try out the project.</p>

## Usage
<p>To use this translator, select your desired formality (formal or informal) through the corresponding buttons at the top, and additionally click to add additional context if you wish. these buttons will be highlighted (background color changes for example) to indicate 
the settings you are using. Next, select your desired languages (the default is English on both source and target) by clicking the language buttons which will give a dropdown menu. Upon selecting the languages, the language should change. Finally, enter your desired text
you wish to translate in the left side of the form (indicated by the placeholder text "Type to Translate") and click 'Enter' button on your keyboard to make the translation request. The translation will appear on the right side of the form.</p>

## Future works
<p>This is just the start of the translator as there are many potential places that can have improvements made to. Firstly, the use of COHERE AI API produces suboptimal results at times with the translations being not as accurate as desired. For this reason, I
propose to use the OpenAI's ChatGPT model using their API key. From my tests, the OpenAI's model is much more accurate and produces much more satisfactory results but it does cost to use the model for which i made the default model, COHERE API as they offer a free trial.
Another improvement that wll potentially be made will be to include even more personalisation such as to direct a message to whoever the user wants, furthermore, potentially allow the users to make prompts for the model to create requests such as "Make a thank you message
to my doctor for the successful leg operation" and such which can make translations more accurate to what the user is trying to get.</p>

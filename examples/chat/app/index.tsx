import { Trigs } from "@trigs";
import { messages } from "./messages";
import { users } from "./users";
import * as schema from "@trigs/schema";
import "@kitajs/html/register";

export const handlers = {
  ...users,
  ...messages,
  htmx: {
    new_chat_message: {
      handler: async (data, db) => {
        await db.insert(schema.messages).values({
          userId: "1d7438c3-87fa-4a90-b049-991dde32dc92",
          messageText: data.chat_message,
        });
      },
      name: "Create chat message",
    },
  },
  html: {
    index: (_db) => {
      return (
        <html>
          <head>
            <title>Home</title>
            <script src="https://unpkg.com/htmx.org@1.9.10"></script>
            <script src="https://unpkg.com/htmx.org/dist/ext/ws.js"></script>
          </head>
          <body>
            <script>
              {`function createWebSocket(url){
      console.log('connecting to the server')

      ws = new WebSocket(url, []);

      ws.addEventListener("open", (event) => {
        console.log('Connected to the server.');
      ws.send(JSON.stringify({ token: '1d7438c3-87fa-4a90-b049-991dde32dc92' }));
    });

      return  ws;
    }

    htmx.createWebSocket = createWebSocket;`}
            </script>

            <h1>Home</h1>
            <p>Welcome to the chat page.</p>

            <div hx-ext="ws" ws-connect="ws://localhost:4020/wire">
              <div id="messages"></div>
              <form id="new_chat_message" ws-send>
                <input name="chat_message" />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </body>
        </html>
      );
    },
  },
} satisfies Trigs;
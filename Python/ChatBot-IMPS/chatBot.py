import streamlit as st
import nltk
from nltk.chat.util import Chat, reflections

# Define some patterns and responses
patterns = [
    (r'hi|hello|hey', ['Hello!', 'Hey there!', 'Hi!']),
    (r'how are you?', ['I am good, thank you.', 'I\'m doing well.', 'All good!']),
    (r'what can you do?', ['I can recommend movies based on your interests.']),
    (r'(.*) movies (.*)', ['I can recommend movies based on your interests.']),
    (r'quit', ['Bye!', 'Goodbye!', 'See you later.']),
]

# Create a chatbot
def chatbot():
    st.title("Movie Recommendation Chatbot")
    st.write("Hi! I'm a movie recommendation chatbot. How can I help you today?")
    chat = Chat(patterns, reflections)
    chat_history = []
    user_input = st.text_input("You:")
    if st.button("Send"):
        chat_history.append(f"You: {user_input}")
        response = chat.respond(user_input)
        if response:
            chat_history.append(f"Bot: {' '.join(response)}")
    st.text_area("Chat History", value="\n".join(chat_history), height=400)

# Run the Streamlit app
if __name__ == "__main__":
    nltk.download('punkt')
    chatbot()

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

{/* Texto mensajes provicionales */}
const AssistantChatScreen = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hola, dime en qué puedo ayudarte' },
    { from: 'user', text: 'Hola Galaxy, quiero ayuda para abrir mi cuenta' },
    { from: 'bot', text: 'Claro que sí, para reactivar tu cuenta puedes dirigirte al menú cuentas.' },
    { from: 'user', text: 'Vale ya acabo de ingresar' },
    { from: 'bot', text: 'Perfecto, ahora haz clic en la opción abrir cuenta personal.' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simulación de respuesta preestablecida
    setTimeout(() => {
      let response = 'Gracias por tu mensaje. Te ayudaré en breve.';

      if (input.toLowerCase().includes('saldo')) {
        response = 'Puedes revisar tu saldo en la pantalla principal debajo de tu tarjeta.';
      } else if (input.toLowerCase().includes('cerrar cuenta')) {
        response = 'Para cerrar tu cuenta, ve a Configuración > Cuenta > Cerrar cuenta.';
      } else if (input.toLowerCase().includes('tarjeta')) {
        response = 'Para solicitar una tarjeta, dirígete al menú tarjetas y selecciona "Solicitar nueva tarjeta".';
      }

      setMessages(prev => [...prev, { from: 'bot', text: response }]);
    }, 1000);
  };

  const MessageBubble = ({ text, from }: { text: string; from: string }) => (
    <View style={{ 
      alignSelf: from === 'user' ? 'flex-end' : 'flex-start',
      backgroundColor: from === 'user' ? '#5C4DB1' : '#E54690',
      borderRadius: 20,
      marginVertical: 5,
      padding: 12,
      maxWidth: '80%',
    }}>
      <Text style={{ color: '#fff' }}>{text}</Text>
    </View>
  );
// Retorno al perfil del usuario
  return (
    <View style={{ flex: 1, backgroundColor: '#1e1e1e', paddingTop: 40 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        {messages.map((msg, index) => (
          <MessageBubble key={index} text={msg.text} from={msg.from} />
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Escribe un mensaje..."
          placeholderTextColor="#888"
          style={{
            flex: 1,
            backgroundColor: '#2c2c2c',
            color: 'white',
            borderRadius: 20,
            paddingHorizontal: 15,
            paddingVertical: 10,
            marginRight: 10,
          }}
        />
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={24} color="#E54690" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AssistantChatScreen;

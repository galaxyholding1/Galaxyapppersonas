// Importación de módulos y componentes necesarios
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Iconos vectoriales
import { Picker } from '@react-native-picker/picker'; // Selector tipo dropdown
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // Tipado de navegación

// Definición de las rutas posibles en el stack de navegación
type RootStackParamList = {
  RegisterStep4Screen: undefined;
  RegisterStep5Screen: undefined;
};

// Tipado de props específicas para esta pantalla
type Props = NativeStackScreenProps<RootStackParamList, 'RegisterStep4Screen'>;

// Componente funcional principal
const RegisterStep4Screen: React.FC<Props> = ({ navigation }) => {

  // Estados que almacenan la selección del usuario
  const [situacionLaboral, setSituacionLaboral] = useState<string>(''); // Situación laboral
  const [sectorTrabajo, setSectorTrabajo] = useState<string>(''); // Sector donde trabaja
  const [origenFondos, setOrigenFondos] = useState<string>(''); // Origen de fondos
  const [esCiudadanoEEUU, setEsCiudadanoEEUU] = useState<boolean | null>(null); // Ciudadanía estadounidense

  // Función que verifica si todos los campos están llenos antes de continuar
  const handleContinue = () => {
    if (situacionLaboral && sectorTrabajo && origenFondos && esCiudadanoEEUU !== null) {
      navigation.navigate('RegisterStep5Screen'); // Navega al siguiente paso
    }
  };

  return (
    <View style={styles.container}>
      {/* Ícono para retroceder */}
      <Ionicons name="arrow-back" size={24} color="white" style={styles.backIcon} />

      {/* Barra de progreso: muestra visual del paso 4 de 7 */}
      <View style={styles.progress}>
        {[...Array(7)].map((_, index) => (
          <View
            key={index}
            style={index < 4 ? styles.stepActive : styles.stepInactive}
          />
        ))}
      </View>

      {/* Logo e instrucciones */}
      <Text style={styles.logo}>
        galaxy
        <Text style={styles.logoBold}>pay</Text>
      </Text>
      <Text style={styles.title}>Información laboral</Text>

      {/* Selector: Situación laboral */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={situacionLaboral}
          onValueChange={(itemValue) => setSituacionLaboral(itemValue)}
          style={styles.picker}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="¿Cuál es tu situación laboral?" value="" />
          <Picker.Item label="Ingresos salariales" value="ingresos_salariales" />
          <Picker.Item label="Prestaciones del Gobierno" value="prestaciones_gobierno" />
          <Picker.Item label="Pensión" value="pension" />
          <Picker.Item label="Subvenciones" value="subvenciones" />
          <Picker.Item label="Donaciones" value="donaciones" />
          <Picker.Item label="Ingresos por alquiler" value="alquiler" />
          <Picker.Item label="Ingresos familiares" value="familiares" />
          <Picker.Item label="Ingresos del mercado de valores" value="mercado_valores" />
        </Picker>
      </View>

      {/* Selector: Sector donde trabaja */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sectorTrabajo}
          onValueChange={(itemValue) => setSectorTrabajo(itemValue)}
          style={styles.picker}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="¿En qué sector trabajas?" value="" />
          <Picker.Item label="Agencias de Viajes e inmobiliarias" value="agencias_viajes_inmobiliarias" />
          <Picker.Item label="Agricultura, ganadería y pesca" value="agricultura_ganaderia_pesca" />
          <Picker.Item label="Arte, joyería, casas de empeño y producción/venta de armas" value="arte_joyeria_empeno_armas" />
          <Picker.Item label="Banca y seguros" value="banca_seguros" />
          <Picker.Item label="Comercio de vehículos y servicios" value="comercio_vehiculos_servicios" />
          <Picker.Item label="Construcción" value="construccion" />
          <Picker.Item label="Deporte, juegos de azar, entretenimiento y gastronomía" value="deporte_entretenimiento_gastronomia" />
        </Picker>
      </View>

      {/* Selector: Origen previsto de los fondos */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={origenFondos}
          onValueChange={(itemValue) => setOrigenFondos(itemValue)}
          style={styles.picker}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="Origen previsto de fondos" value="" />
          <Picker.Item label="Nómina" value="nomina" />
          <Picker.Item label="Ahorros" value="ahorros" />
          <Picker.Item label="Herencia" value="herencia" />
          <Picker.Item label="Otros" value="otros" />
        </Picker>
      </View>

      {/* Pregunta: Ciudadano/residente fiscal de EE. UU. */}
      <Text style={styles.label}>¿Es ciudadano/residente fiscal de EE.UU.?</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setEsCiudadanoEEUU(true)}
        >
          <View style={[styles.radioCircle, esCiudadanoEEUU === true && styles.selected]} />
          <Text style={styles.radioText}>Sí</Text>
        </TouchableOpacity>
        {/* Opción No */}
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setEsCiudadanoEEUU(false)}
        >
          <View style={[styles.radioCircle, esCiudadanoEEUU === false && styles.selected]} />
          <Text style={styles.radioText}>No</Text>
        </TouchableOpacity>
      </View>

      {/* Botón para continuar */}
      <TouchableOpacity
        style={[
          styles.button,
          !(situacionLaboral && sectorTrabajo && origenFondos && esCiudadanoEEUU !== null) && styles.buttonDisabled
        ]}
        onPress={handleContinue}
        disabled={!(situacionLaboral && sectorTrabajo && origenFondos && esCiudadanoEEUU !== null)}
      >
        <Text style={styles.buttonText}>continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterStep4Screen;
// Estilos de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  progress: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
    gap: 5,
  },
  stepActive: {
    width: 30,
    height: 4,
    backgroundColor: '#ff2c92',
    borderRadius: 2,
  },
  stepInactive: {
    width: 30,
    height: 4,
    backgroundColor: '#555',
    borderRadius: 2,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  logoBold: {
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    color: '#f5731a',
    marginBottom: 20,
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  picker: {
    color: 'white',
    height: 50,
    width: '100%',
  },
  label: {
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 8,
  },
  selected: {
    backgroundColor: '#ff2c92',
    borderColor: '#ff2c92',
  },
  radioText: {
    color: 'white',
  },
  button: {
    backgroundColor: '#ff2c92',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#5a1a3f',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
import 'package:flutter/material.dart';

class InformacionLaboralPage extends StatefulWidget {
  @override
  _InformacionLaboralPageState createState() => _InformacionLaboralPageState();
}

class _InformacionLaboralPageState extends State<InformacionLaboralPage> {
  String? situacionLaboral;
  String? sectorTrabajo;
  String? origenFondos;

  final List<String> opcionesSituacionLaboral = [
    'Ingresos salariales',
    'Prestaciones Del Gobierno',
    'Pensión',
    'Subvenciones',
    'Donaciones',
    'Ingresos Por Alquiler',
    'Ingresos Familiares',
    'Ingresos Del Mercado De Valores',
  ];

  final List<String> opcionesSectorTrabajo = [
    'Agencias de Viajes e inmobiliarias',
    'Agricultura, ganadería y pesca',
    'Arte, joyería, casas de empeño y producción/venta de armas',
    'Banca y seguros',
    'Comercio de vehículos y servicios',
    'Construcción',
    'Deporte, juegos de azar, entretenimiento y gastronomía',
  ];

  final List<String> opcionesOrigenFondos = [
    'Nómina',
    'Ahorros',
    'Herencia',
    'Otros',
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        title: Text("Información laboral", style: TextStyle(color: Colors.white)),
        iconTheme: IconThemeData(color: Colors.white),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            DropdownButtonFormField<String>(
              value: situacionLaboral,
              dropdownColor: Colors.grey[850],
              style: TextStyle(color: Colors.white),
              decoration: InputDecoration(
                labelText: "¿Cuál es tu situación laboral?",
                labelStyle: TextStyle(color: Colors.grey[400]),
                filled: true,
                fillColor: Colors.grey[800],
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              ),
              items: opcionesSituacionLaboral.map((opcion) {
                return DropdownMenuItem(
                  value: opcion,
                  child: Text(opcion),
                );
              }).toList(),
              onChanged: (value) {
                setState(() {
                  situacionLaboral = value;
                });
              },
            ),
            SizedBox(height: 16),
            DropdownButtonFormField<String>(
              value: sectorTrabajo,
              dropdownColor: Colors.grey[850],
              style: TextStyle(color: Colors.white),
              decoration: InputDecoration(
                labelText: "¿En qué sector trabajas?",
                labelStyle: TextStyle(color: Colors.grey[400]),
                filled: true,
                fillColor: Colors.grey[800],
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              ),
              items: opcionesSectorTrabajo.map((opcion) {
                return DropdownMenuItem(
                  value: opcion,
                  child: Text(opcion),
                );
              }).toList(),
              onChanged: (value) {
                setState(() {
                  sectorTrabajo = value;
                });
              },
            ),
            SizedBox(height: 16),
            DropdownButtonFormField<String>(
              value: origenFondos,
              dropdownColor: Colors.grey[850],
              style: TextStyle(color: Colors.white),
              decoration: InputDecoration(
                labelText: "Origen previsto de fondos",
                labelStyle: TextStyle(color: Colors.grey[400]),
                filled: true,
                fillColor: Colors.grey[800],
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              ),
              items: opcionesOrigenFondos.map((opcion) {
                return DropdownMenuItem(
                  value: opcion,
                  child: Text(opcion),
                );
              }).toList(),
              onChanged: (value) {
                setState(() {
                  origenFondos = value;
                });
              },
            ),
            Spacer(),
            ElevatedButton(
              onPressed: (situacionLaboral != null && sectorTrabajo != null && origenFondos != null)
                  ? () {
                      // Acción al presionar "continuar"
                      print("Situación: $situacionLaboral");
                      print("Sector: $sectorTrabajo");
                      print("Origen: $origenFondos");
                    }
                  : null,
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.purple[800],
                disabledBackgroundColor: Colors.purple[900],
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                minimumSize: Size(double.infinity, 50),
              ),
              child: Text("Continuar", style: TextStyle(color: Colors.white)),
            ),
          ],
        ),
      ),
    );
  }
}

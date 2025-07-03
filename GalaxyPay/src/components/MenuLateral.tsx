// components/MenuLateral.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WelcomeBg from '../assets/welcome_bg.svg';

interface MenuLateralProps {
  visible: boolean;
  onClose: () => void;
  navigation: any;
}
// En este segmento se expone el menu con su respectivo subemenu integrado para que cuando se desplegue puedan ver las pestañas internas
const MenuLateral: React.FC<MenuLateralProps> = ({ visible, onClose, navigation }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(prev => (prev === menu ? null : menu));
  };

  const menuItems = [
    { label: 'Identidad digital', icon: 'person-outline', route: 'IdentidadDigital' },
    {
      label: 'Banking',
      icon: 'card-outline',
      submenu: [
        { label: 'Añadir saldo', route: 'AnadirSaldo' },
        { label: 'Movimientos', route: 'Movimientos' },
        { label: 'Pagos (transferencias)', route: 'PagosTransferencias' },
        { label: 'Pagos de servicios', route: 'PagosServicios' },
        { label: 'Tarjeta', route: 'Tarjeta' },
        { label: 'Financiamiento', route: 'Financiamiento' },
        { label: 'Compra - Venta', route: 'CompraVenta' },
      ],
    },
    {
      label: 'Exchange',
      icon: 'swap-horizontal-outline',
      submenu: [
        { label: 'Trading', route: 'Trading' },
        { label: 'Staking', route: 'Staking' },
        { label: 'DEFI', route: 'DEFI' },
        { label: 'Lending', route: 'Lending' },
      ],
    },
    { label: 'Posición global', icon: 'navigate-outline', route: 'PosicionGlobal' },
    { label: 'Red de colaboradores', icon: 'people-outline', route: 'RedColaboradores' },
    {
      label: 'Configuración',
      icon: 'settings-outline',
      submenu: [
        { label: 'Mi perfil', route: 'MiPerfil' },
        { label: 'Niveles VIP', route: 'NivelesVIP' },
        { label: 'Seguridad', route: 'Seguridad' },
        { label: 'Sesión', route: 'Sesion' },
        { label: 'Verificar identidad', route: 'VerificarIdentidad' },
        { label: 'Agenda', route: 'Agenda' },
        { label: 'Remesas', route: 'Remesas' },
        { label: 'Cerrar sesión', route: 'CerrarSesion' },
      ],
    },
    { label: 'Cerrar sesión', icon: 'log-out-outline', route: 'CerrarSesion' },
  ];

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.menuContainer}>
          <WelcomeBg style={styles.backgroundSvg} />
          <View style={styles.header}>
            <Text style={styles.menuTitle}>Menú principal</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {menuItems.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    if (item.submenu) {
                      toggleSubmenu(item.label);
                    } else {
                      onClose();
                      navigation.navigate(item.route);
                    }
                  }}
                >
                  <Ionicons name={item.icon as any} size={20} color="#fff" />
                  <Text style={styles.menuText}>{item.label}</Text>
                  {item.submenu && (
                    <Ionicons
                      name={
                        openSubmenu === item.label
                          ? 'chevron-up-outline'
                          : 'chevron-down-outline'
                      }
                      size={16}
                      color="#fff"
                      style={{ marginLeft: 'auto' }}
                    />
                  )}
                </TouchableOpacity>
                {item.submenu && openSubmenu === item.label && (
                  <View style={styles.submenuContainer}>
                    {item.submenu.map((subItem, subIndex) => (
                      <TouchableOpacity
                        key={subIndex}
                        style={styles.submenuItem}
                        onPress={() => {
                          onClose();
                          navigation.navigate(subItem.route);
                        }}
                      >
                        <Text style={styles.submenuText}>{subItem.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
// En estos estilos se integra el fondo degradado y los tipos de letra ademas del despliegue lateral
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  menuContainer: {
    width: '80%',
    height: '100%',
    padding: 20,
    backgroundColor: '#4d3b8f',
  },
  backgroundSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  submenuContainer: {
    paddingLeft: 30,
    marginTop: 5,
  },
  submenuItem: {
    paddingVertical: 5,
  },
  submenuText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default MenuLateral;

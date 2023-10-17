import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactHeader from "../../components/Contact/ContactHeader/Index";
import ItemContact from "../../components/Contact/ItemContact";
import { COLORS } from "../../configs/Colors";
import { CONTACT_DATA } from "../../data/contactData";

const Contacts = () => {
  return (
    <View style={styles.container}>
      <ContactHeader
      numberContact={14}
        onGoback={() => "#"}
        onDotsVertical={() => "#"}
        onSearch={() => "#"}
      />
      <Text style={styles.title}>Contact on Whatsapp</Text>
      <ScrollView>
        {CONTACT_DATA.map((item) => {
          return (
            <ItemContact
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          );
        })}
      </ScrollView>
      {/* <Text>Contacts</Text> */}
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryColor,
    flex: 1,
  },
  title: {
    fontSize: 12,
    color: COLORS.textGrey,
    marginVertical: 5,
  },
});

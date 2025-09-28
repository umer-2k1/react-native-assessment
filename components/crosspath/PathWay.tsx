import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ActionType = "start" | "stop";

const { width } = Dimensions.get("window");
const PathWay = () => {
  //   const [isStop, setStop] = useState(true);
  //   const [counter, setCounter] = useState(10);
  //   const [startTimer, setStartTimer] = useState(false);
  //   const [first, setFirst] = useState(true);

  //   const handleActions = () => {
  //     timerHandler();

  //     // if (first) {
  //     //   setFirst(false);
  //     //   setStartTimer(true);
  //     //   timerHandler();
  //     // }

  //     // Alert.alert("Clicker");
  //     // setStartTimer(true);
  //     // timerHandler();
  //     // if (counter < 1) {
  //     //   setCounter(10);
  //     // }

  //     // if (type === "start") {
  //     //   setStop(false);
  //     // } else {
  //     //   setStop(true);
  //     //   //
  //     // }

  //     // if (condition) {

  //     // }
  //   };

  //   //   useEffect(() => {
  //   //     if (!startTimer) {

  //   //     }
  //   //   }, []);

  //   const timerHandler = () => {
  //     if (startTimer) {
  //       const timer = setInterval(() => {
  //         // setCounter((counter) => counter - 1);
  //         setCounter((counter) => {
  //           if (counter < 1) {
  //             clearInterval(timer);
  //             setStartTimer(false);
  //             setStop(!!stop); // or false depending on your logic\
  //             // timerHandler();
  //             return 0;
  //           }
  //           return counter - 1;
  //         });
  //       }, 1000);
  //     }
  //   };

  const [isStop, setStop] = useState(true); // true = red, false = green
  const [counter, setCounter] = useState(10);
  const [startTimer, setStartTimer] = useState(false);

  const handleActions = () => {
    if (!startTimer) {
      setStartTimer(true); // start system on first click
    }
  };

  useEffect(() => {
    let timer: number;

    if (startTimer) {
      timer = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) {
            // flip the light
            setStop((prevStop) => !prevStop);
            // reset counter (different times for red/green if needed)
            return 10;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer); // cleanup
  }, [startTimer]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.root}>
        <TouchableOpacity
          //   disabled={counter > 0}
          //   onPress={()=> handleActions(isStop && counter<=0 ? "")}
          onPress={handleActions}
          style={[
            styles.actionBtn,
            { backgroundColor: isStop ? "red" : "green" },
          ]}
        ></TouchableOpacity>

        <View style={styles.tileView}>
          <View style={[styles.tiles, { backgroundColor: "#000" }]} />
          <View style={[styles.tiles, { backgroundColor: "#fff" }]} />
          <View style={[styles.tiles, { backgroundColor: "#000" }]} />
          <View style={[styles.tiles, { backgroundColor: "#fff" }]} />
          <View style={[styles.tiles, { backgroundColor: "#000" }]} />
          <View style={[styles.tiles, { backgroundColor: "#fff" }]} />
          <View style={[styles.tiles, { backgroundColor: "#000" }]} />
          <View style={[styles.tiles, { backgroundColor: "#fff" }]} />
        </View>

        <Text style={[styles.counterText, { color: isStop ? "red" : "green" }]}>
          {counter}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const tileHeight = 350;
const tileWidth = width * 0.8;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  tileView: {
    borderWidth: 2,
    borderColor: "#fff",
    width: tileWidth,
    height: tileHeight,
    flexDirection: "row",
  },
  tiles: {
    height: tileHeight - 2,
    width: tileWidth / 8,
  },
  counterText: {
    paddingVertical: 6,
    fontSize: 22,
    fontWeight: "600",
  },
  actionBtn: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 999,
  },
});

export { PathWay };

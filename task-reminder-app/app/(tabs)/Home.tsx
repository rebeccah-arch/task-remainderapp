import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

interface Task {
  id: string;
  text: string;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  const openAddModal = () => {
    setNewTaskText("");
    setIsEditing(false);
    setEditingTaskId(null);
    setModalVisible(true);
  };

  const openEditModal = (task: Task) => {
    setNewTaskText(task.text);
    setIsEditing(true);
    setEditingTaskId(task.id);
    setModalVisible(true);
  };

  const saveTask = () => {
    if (newTaskText.trim() === "") return;
    if (isEditing) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTaskId ? { ...t, text: newTaskText } : t
        )
      );
    } else {
      const newTask = { id: Date.now().toString(), text: newTaskText };
      setTasks((prev) => [newTask, ...prev]);
    }
    setModalVisible(false);
    setNewTaskText("");
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View className="bg-white p-4 my-2 rounded-lg flex-row justify-between items-center shadow-lg">
      <Text className="text-lg">{item.text}</Text>
      <View className="flex-row">
        <TouchableOpacity onPress={() => openEditModal(item)} className="mr-4">
          <Feather name="edit-2" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(item.id)}>
          <MaterialIcons name="delete" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#ffe5b4af] px-10">
      {/* Header Cards */}
      <View className="mt-32 flex-wrap flex-row justify-between">
        <View className="w-[48%] bg-white rounded-2xl p-4 mb-4 shadow">
          <Text className="text-xl font-bold">Today</Text>
          <Text className="text-3xl absolute right-4 bottom-4">
            {tasks.length}
          </Text>
        </View>
        <View className="w-[48%] bg-white rounded-2xl p-4 mb-4 shadow">
          <Text className="text-xl font-bold">Completed</Text>
          <Text className="text-3xl absolute right-4 bottom-4">0</Text>
        </View>
        <View className="w-[48%] bg-white rounded-2xl p-4 mb-4 shadow">
          <Text className="text-xl font-bold">Scheduled</Text>
          <Text className="text-3xl absolute right-4 bottom-4">0</Text>
        </View>
        <View className="w-[48%] bg-white rounded-2xl p-4 mb-4 shadow">
          <Text className="text-xl font-bold">Cancelled</Text>
          <Text className="text-3xl absolute right-4 bottom-4">0</Text>
        </View>
      </View>

      {/* Task List */}
      <View className="flex-1">
        <View className="flex-row justify-between items-center my-10">
          <Text className="text-4xl font-bold">My Lists</Text>
        </View>
        <View className="h-[60%]">
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            className="rounded-xl bg-white"
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text className="text-center text-xl text-gray-500 mt-5">
                No tasks yet.
              </Text>
            }
          />
        </View>
      </View>

      {/* Add Button */}
      <TouchableOpacity
        className="absolute right-6 bottom-8 bg-orange-500 w-14 h-14 rounded-full justify-center items-center shadow-md"
        onPress={openAddModal}
      >
        <Text className="text-white text-3xl font-bold">+</Text>
      </TouchableOpacity>

      {/* Modal for Add/Edit */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center">
          <View className="w-[70%] h-[30%] bg-white rounded-lg p-10 flex justify-between">
            <TextInput
              placeholder={isEditing ? "Edit task" : "New task"}
              value={newTaskText}
              onChangeText={setNewTaskText}
              className="border-b pb-2 mb-10 text-lg"
            />
            <View className="flex-row justify-around">
              <TouchableOpacity
                onPress={saveTask}
                className="bg-green-400 py-4 px-8 rounded-xl"
              >
                <Text className="text-white font-bold">Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="bg-red-400 py-4 px-8 rounded-xl"
              >
                <Text className="text-white font-bold">Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default App;

import React from "react";
import Sidebar from "../Admin/AdminSidebar";
import Header from "../Admin/AdminHeader";
import Dashboard from "./TaskDashboard";
import TaskDashboard from "../../pages/TaskManagement/TaskManagerDashboard";

export default function Layout() {
    return (
        <div className="flex flex-row  bg-neutral-100 h-screen w-screen
        overflow-hidden">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <Dashboard />
                <TaskDashboard />
            </div>
        </div>
    );
}
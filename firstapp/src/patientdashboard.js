import React from 'react';
import './App.css';
import './patientdashboard.css'

function PatientDashboard() {
    return (
      <div class="container">
        <div class="leftcontainer">
            <div class="navbar">
                <div class="upper">
                    <div class="logo">
                        <p>RURALMED</p>
                    </div>
                    <div class="menus">
                        <ul>
                            <li>Dashboard</li>
                            <li>Find Consultation</li>
                            <li>Community</li>
                        </ul>
                    </div>
                </div>
                <div class="lower">
                    <ul>
                        <li class="settings-menu">
                            Settings
                            <ul class="settings-dropdown">
                                <li>Manage Profile</li>
                                <li>Reset Password</li>
                                <li>Notifications Settings</li>
                            </ul>
                        </li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="rightContainer">

            <div class="profile-icon">
                <i class="fas fa-user-circle profile-icon-img"></i>

                <img src="profile.jpg" alt="Profile" class="profile-pic"></img>
                <div class="dropdown">
                    <ul>
                        <li>View Profile</li>
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
   <div class="header">
        <h2>Patient Name</h2>
    </div>

    <div class="patient-details">
        <div class="detail-item">
            <strong>Patient ID:</strong> 12345
        </div>
        <div class="detail-item">
            <strong>Age:</strong> 45
        </div>
        <div class="detail-item">
            <strong>Gender:</strong> Male
        </div>
        <div class="detail-item">
            <strong>Contact:</strong> +123 456 7890
        </div>
        <div class="detail-item">
            <strong>Email:</strong> patient@example.com
        </div>
        <div class="detail-item">
            <strong>Address:</strong> 123 Street Name, City, Country
        </div>
    </div>
    
    <div class="dashboard-content">
       
        <div class="info-section">
            <div class="upcoming-appointments">
                <h3>Upcoming Appointments</h3>
                <div class="appointment-item">Appointment 1</div>
                <div class="appointment-item">Appointment 2</div>
            </div>
            <div class="recent-appointments">
                <h3>Recent Appointments</h3>
                <div class="appointment-item">Recent Appointment 1</div>
                <div class="appointment-item">Recent Appointment 2</div>
            </div>
            <div class="diagnosis">
                <h3>Diagnosis</h3>
                <div class="diagnosis-item">
                    <i class="fas fa-prescription-bottle-alt"></i> Diagnosis 1
                </div>
                <div class="diagnosis-item">
                    <i class="fas fa-prescription-bottle-alt"></i> Diagnosis 2
                </div>
            </div>

            <div class="medication">
                <h3>Medication</h3>
                <div class="medication-item">
                    <i class="fas fa-pills"></i> Medication 1
                </div>
                <div class="medication-item">
                    <i class="fas fa-pills"></i> Medication 2
                </div>
            </div>

        </div>

       <div class="calendar-notification-section">
        <div class="calendar-section">
        <h3>August</h3>
        <div class="calendar">
            <div class="calendar-grid">
                <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>

                <div class="empty-day">28</div><div class="empty-day">29</div><div class="empty-day">30</div><div class="empty-day">31</div><div>1</div><div>2</div><div>3</div>
                <div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div>
                <div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div>16</div><div>17</div>
                <div>18</div><div>19</div><div>20</div><div>21</div><div>22</div><div>23</div><div>24</div>
                <div>25</div><div>26</div><div>27</div><div>28</div><div>29</div><div>30</div><div class="empty-day">1</div>
            </div>
        </div>
    </div>

    <div class="notifications-section">
        <h3>Notifications</h3>
        <div class="notification-item">New appointment scheduled for tomorrow.</div>
        <div class="notification-item">Medication reminder: Take your medicine at 8:00 AM.</div>
        <div class="notification-item">You have a new message from your doctor.</div>
    </div>
</div>


        <div class="doctors-section">
            <h3>Your Doctors</h3>
            <div class="doctor-item">Dr. XYZ</div>
            <div class="doctor-item">Dr. ABC</div>
        </div>
    </div>
</div>

    </div>
    )
  };

export default PatientDashboard; // Ensure the component is exported properly

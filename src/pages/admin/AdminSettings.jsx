import { useState } from 'react';

const AdminSettings = () => {
    const [settings, setSettings] = useState({
        siteName: 'MOOC Platform',
        maintenanceMode: false,
        allowRegistration: true,
        emailNotifications: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        alert('Settings saved successfully!');
    };

    return (
        <section className="content-section active" style={{ paddingTop: '2rem', padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--dark)' }}>System Settings</h2>

            <div className="dash-widget" style={{ maxWidth: '600px' }}>
                <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* General Settings */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>General</h4>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Platform Name</label>
                            <input
                                type="text"
                                name="siteName"
                                value={settings.siteName}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                            />
                        </div>
                    </div>

                    {/* Toggles */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>Availability & Access</h4>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div>
                                <div style={{ fontWeight: 500 }}>Maintenance Mode</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>Disable access for all users except admins</div>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="maintenanceMode"
                                    checked={settings.maintenanceMode}
                                    onChange={handleChange}
                                />
                                <span style={{ marginLeft: '10px', fontSize: '0.9rem', color: settings.maintenanceMode ? '#ef4444' : 'var(--gray)' }}>
                                    {settings.maintenanceMode ? 'On' : 'Off'}
                                </span>
                            </label>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ fontWeight: 500 }}>Allow New Registrations</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>Public sign-up form visibility</div>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="allowRegistration"
                                    checked={settings.allowRegistration}
                                    onChange={handleChange}
                                />
                                <span style={{ marginLeft: '10px', fontSize: '0.9rem', color: settings.allowRegistration ? '#10b981' : 'var(--gray)' }}>
                                    {settings.allowRegistration ? 'Allowed' : 'Disabled'}
                                </span>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                        Save Changes
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AdminSettings;

import styles from "../NavigationBar.module.css";

interface NotificationIconProps {
  hasNotification: boolean;
}

const GeneralNotificationIcon: React.FC<NotificationIconProps> = ({ hasNotification }) => {
  if (!hasNotification) {
    return null;
  }

  return <span className={styles.generalNotificationIcon}></span>;
};

export default GeneralNotificationIcon;

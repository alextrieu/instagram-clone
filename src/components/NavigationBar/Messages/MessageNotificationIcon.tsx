import styles from "../NavigationBar.module.css";

interface NotificationIconProps {
  hasNotification: boolean;
}

const MessageNotificationIcon: React.FC<NotificationIconProps> = ({ hasNotification }) => {
  if (!hasNotification) {
    return null;
  }

  return <span className={styles.messageNotificationIcon}>1</span>;
};

export default MessageNotificationIcon;

import styles from './index.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>PetBuddy</h3>
            <p>반려동물과 함께하는 더 행복한 일상</p>
          </div>
          <div className={styles.section}>
            <h4>고객센터</h4>
            <p>1234-5678</p>
            <p>support@petbuddy.com</p>
          </div>
          <div className={styles.section}>
            <h4>바로가기</h4>
            <ul>
              <li>
                <a href="/terms">이용약관</a>
              </li>
              <li>
                <a href="/privacy">개인정보처리방침</a>
              </li>
              <li>
                <a href="/faq">자주 묻는 질문</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2024 PetBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import styles from './styles.module.scss';
import { AuthContext } from '../../context/auth';

export function LoginBox () {
    const { signInUrl } = useContext (AuthContext);

    return (
        <div className={styles.loginBoxWrapper}>
            <strong> Entre e compartilhe suas mensagens</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="25" />
                Entra com Github
            </a>
        </div>
    )
}
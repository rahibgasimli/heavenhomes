import React from "react";
import styles from "./content.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";

export default function Content() {
    return (
        <section className={cn("section")}>
            <div className={cn("container", styles.container)}>
                <div className={cn("paragraph-large", styles.text)}>
                    Die MR Bauunternehmen (Website-URL: <a href="https://mr-bauunternehmen.de" className={styles.link} target="_blank" rel="noreferrer">https://mr-bauunternehmen.de</a>) nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Nachfolgend informieren wir Sie darüber, wie wir personenbezogene Daten erfassen, verarbeiten und schützen.
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        1. Verantwortliche Stelle
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br /><br />
                        MR Bauunternehmen<br />
                        Inhaber: Ruslan Mammadov<br />
                        35745 Herborn<br />
                        Deutschland<br /><br />
                        Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte können Sie sich jederzeit an uns wenden.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        2. Erhobene und verarbeitete Daten
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Wir erheben und verarbeiten personenbezogene Daten nur im Rahmen der gesetzlichen Vorschriften und soweit es zur Bereitstellung unserer Dienstleistungen erforderlich ist.<br /><br />
                        <strong>a) Kontaktformular:</strong><br />
                        Wenn Sie uns über das Kontaktformular auf unserer Webseite kontaktieren, erheben wir die folgenden Daten:
                    </div>
                    <ul className={cn("paragraph-large", styles.text, styles.list)}>
                        <li>Name</li>
                        <li>E-Mail-Adresse</li>
                        <li>Telefonnummer (optional)</li>
                        <li>Nachrichtentext</li>
                    </ul>
                    <div className={cn("paragraph-large", styles.text)}>
                        Diese Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme, z. B. zur Erstellung eines Angebots. Die Daten werden nicht für Werbezwecke verwendet oder an Dritte weitergegeben.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        3. Automatisch erfasste Daten
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Beim Besuch unserer Webseite erfasst unser Server automatisch technische Informationen in sogenannten Server-Log-Dateien. Diese Daten umfassen:
                    </div>
                    <ul className={cn("paragraph-large", styles.text, styles.list)}>
                        <li>IP-Adresse des Besuchers</li>
                        <li>Datum und Uhrzeit des Seitenaufrufs</li>
                        <li>verwendeter Browser und Betriebssystem</li>
                        <li>besuchte Seiten unserer Webseite</li>
                    </ul>
                    <div className={cn("paragraph-large", styles.text)}>
                        Diese Daten werden ausschließlich zur Sicherstellung des reibungslosen Betriebs, zur Fehleranalyse und zur Verbesserung unseres Webangebots genutzt und nicht mit anderen Datenquellen zusammengeführt.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        4. Cookies
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Unsere Webseite verwendet Cookies, um Ihnen ein optimales Nutzungserlebnis zu bieten. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Sie dienen dazu, bestimmte Funktionen der Webseite bereitzustellen und Einstellungen zu speichern.<br /><br />
                        Verwendete Cookies:
                    </div>
                    <ul className={cn("paragraph-large", styles.text, styles.list)}>
                        <li><strong>Notwendige Cookies:</strong> Diese sind für den Betrieb der Webseite erforderlich und können nicht deaktiviert werden. Sie speichern beispielsweise Ihre Cookie-Einstellungen oder helfen, Angriffe abzuwehren.</li>
                        <li><strong>Optionale Cookies (z. B. Analyse-Cookies):</strong> Diese dienen statistischen Zwecken und zur Verbesserung der Webseite. Diese Cookies werden nur mit Ihrer Zustimmung verwendet.</li>
                    </ul>
                    <div className={cn("paragraph-large", styles.text)}>
                        Sie können die Speicherung von Cookies in den Einstellungen Ihres Browsers deaktivieren. Bitte beachten Sie jedoch, dass einige Funktionen der Webseite dann möglicherweise nicht vollständig zur Verfügung stehen.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        5. Eingebettete Inhalte und externe Links
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Auf unserer Webseite können Inhalte externer Plattformen eingebettet sein, z. B. Videos von YouTube, Feeds von Facebook, Instagram oder TikTok. Diese eingebetteten Inhalte verhalten sich genau so, als würden Sie die externe Webseite direkt besuchen.<br /><br />
                        Diese Drittanbieter können Daten über Sie sammeln, Cookies verwenden oder Ihre Interaktionen verfolgen, insbesondere wenn Sie dort ein Konto besitzen und eingeloggt sind. Wir haben keinen Einfluss auf die Datenschutzrichtlinien dieser Anbieter. Weitere Informationen finden Sie in den Datenschutzbestimmungen der jeweiligen Plattformen:
                    </div>
                    <ul className={cn("paragraph-large", styles.text, styles.list)}>
                        <li>YouTube Datenschutzerklärung</li>
                        <li>Facebook Datenschutzerklärung</li>
                        <li>Instagram Datenschutzerklärung</li>
                        <li>TikTok Datenschutzerklärung</li>
                    </ul>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        6. Datensicherheit
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen. Unsere Webseite verwendet das SSL/HTTPS-Protokoll, um Ihre Daten während der Übertragung zu verschlüsseln und vor unbefugtem Zugriff zu schützen.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        7. Speicherdauer der Daten
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Die von Ihnen über das Kontaktformular übermittelten Daten werden nur so lange gespeichert, wie es zur Bearbeitung Ihres Anliegens erforderlich ist. Sobald Ihre Anfrage vollständig bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten bestehen, werden Ihre Daten gelöscht.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        8. Ihre Rechte
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Sie haben das Recht:
                    </div>
                    <ul className={cn("paragraph-large", styles.text, styles.list)}>
                        <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu verlangen</li>
                        <li>Berichtigung unrichtiger Daten oder Ergänzung unvollständiger Daten zu fordern</li>
                        <li>die Löschung Ihrer Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen</li>
                        <li>die Einschränkung der Verarbeitung zu verlangen</li>
                        <li>der Verarbeitung Ihrer Daten zu widersprechen</li>
                        <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Recht auf Datenübertragbarkeit)</li>
                    </ul>
                    <div className={cn("paragraph-large", styles.text)}>
                        Um Ihre Rechte geltend zu machen, kontaktieren Sie uns bitte über die angegebenen Kontaktdaten.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        9. Änderungen dieser Datenschutzerklärung
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf zu ändern, um sie an aktuelle rechtliche Vorgaben oder Änderungen unserer Dienste anzupassen. Die jeweils aktuelle Version der Datenschutzerklärung finden Sie jederzeit auf unserer Webseite.<br /><br />
                        Stand: 01.01.2025
                    </div>
                </div>

            </div>
        </section>
    );
}

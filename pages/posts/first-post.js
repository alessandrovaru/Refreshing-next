export default function FirstPost() {
    return (
        <div>
            <h1>First Post</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tempor consectetur, nisl nunc
                aliquet nunc, eget tincidunt nisl nunc euismod nunc.
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Sed euismod, urna eu tempor
                consectetur, nisl nunc aliquet nunc, eget tincidunt nisl nunc
                euismod nunc. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia Curae; Sed euismod, urna
                eu tempor consectetur, nisl nunc aliquet nunc, eget tincidunt
                nisl nunc euismod nunc.
            </p>
            <button onClick={() => {
                window.location.href = '/';
            }}>
                Go to Home Page
            </button>
        </div>
    );
}
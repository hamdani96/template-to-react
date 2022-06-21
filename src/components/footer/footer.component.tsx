const FooterComponent = () => {
    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>iPortfolio</span></strong>
                    </div>
                    <div className="credits">
                        Designed by <a href="https://hamdani96.github.io/">Hamdani</a>
                    </div>
                </div>
            </footer>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    );
}

export default FooterComponent;
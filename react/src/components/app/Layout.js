import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import FlashMessages from "./../../containers/FlashMessageContainer";
import PageLoader from "./../../containers/PageLoaderContainer";
class Layout extends React.Component {
  render() {
    return (
      <div>
        <PageLoader />
        <div className="hold-transition skin-blue sidebar-mini">
          {/* Site wrapper */}
          <div className="wrapper">
            <Header user={this.props.user} />
            {/* CONTENT*/}
            <Navbar router={this.props.router} />
            <FlashMessages />
            <div className="content-wrapper">
              <app-confirm-modal />
              <div className="content-header">
                <h1>{this.props.pageTitle}</h1>
              </div>
              {/* Main content */}
              <section className="content">
                {this.props.children}
              </section>
              {/* /.content */}
            </div>
            {/* CONTENT*/}
            <footer className="main-footer">
              <div className="pull-right hidden-xs">
                <b>Version</b> 2.3.8
              </div>
              <strong>
                Copyright &copy; 2014-2016
                {" "}<a href="http://almsaeedstudio.com">Almsaeed Studio</a>.
              </strong>
              {" "}All
              rights
              reserved.
            </footer>
            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
              {/* Create the tabs */}
              <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                <li>
                  <a href="#control-sidebar-home-tab" data-toggle="tab">
                    <i className="fa fa-home" />
                  </a>
                </li>

                <li>
                  <a href="#control-sidebar-settings-tab" data-toggle="tab">
                    <i className="fa fa-gears" />
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                {/* Home tab content */}
                <div className="tab-pane" id="control-sidebar-home-tab">
                  <h3 className="control-sidebar-heading">Recent Activity</h3>
                  <ul className="control-sidebar-menu">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="menu-icon fa fa-birthday-cake bg-red" />

                        <div className="menu-info">
                          <h4 className="control-sidebar-subheading">
                            Langdon's Birthday
                          </h4>

                          <p>Will be 23 on April 24th</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="menu-icon fa fa-user bg-yellow" />

                        <div className="menu-info">
                          <h4 className="control-sidebar-subheading">
                            Frodo Updated His Profile
                          </h4>

                          <p>New phone +1(800)555-1234</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="menu-icon fa fa-envelope-o bg-light-blue" />

                        <div className="menu-info">
                          <h4 className="control-sidebar-subheading">
                            Nora Joined Mailing List
                          </h4>

                          <p>nora@example.com</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="menu-icon fa fa-file-code-o bg-green" />

                        <div className="menu-info">
                          <h4 className="control-sidebar-subheading">
                            Cron Job 254 Executed
                          </h4>

                          <p>Execution time 5 seconds</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                  {/* /.control-sidebar-menu */}

                  <h3 className="control-sidebar-heading">Tasks Progress</h3>
                  <ul className="control-sidebar-menu">
                    <li>
                      <a href="javascript:void(0)">
                        <h4 className="control-sidebar-subheading">
                          Custom Template Design
                          <span className="label label-danger pull-right">
                            70%
                          </span>
                        </h4>

                        <div className="progress progress-xxs">
                          <div
                            className="progress-bar progress-bar-danger"
                            style={{ width: "70%" }}
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h4 className="control-sidebar-subheading">
                          Update Resume
                          <span className="label label-success pull-right">
                            95%
                          </span>
                        </h4>

                        <div className="progress progress-xxs">
                          <div
                            className="progress-bar progress-bar-success"
                            style={{ width: "95%" }}
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h4 className="control-sidebar-subheading">
                          Laravel Integration
                          <span className="label label-warning pull-right">
                            50%
                          </span>
                        </h4>

                        <div className="progress progress-xxs">
                          <div
                            className="progress-bar progress-bar-warning"
                            style={{ width: "50%" }}
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <h4 className="control-sidebar-subheading">
                          Back End Framework
                          <span className="label label-primary pull-right">
                            68%
                          </span>
                        </h4>

                        <div className="progress progress-xxs">
                          <div
                            className="progress-bar progress-bar-primary"
                            style={{ width: "68%" }}
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                  {/* /.control-sidebar-menu */}

                </div>
                {/* /.tab-pane */}
                {/* Stats tab content */}
                <div className="tab-pane" id="control-sidebar-stats-tab">
                  Stats Tab Content
                </div>
                {/* /.tab-pane */}
                {/* Settings tab content */}
                <div className="tab-pane" id="control-sidebar-settings-tab">
                  <form method="post">
                    <h3 className="control-sidebar-heading">
                      General Settings
                    </h3>

                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Report panel usage
                        <input type="checkbox" className="pull-right" />
                      </label>

                      <p>
                        Some information about this general settings option
                      </p>
                    </div>
                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Allow mail redirect
                        <input type="checkbox" className="pull-right" />
                      </label>
                      <p>
                        Other sets of options are available
                      </p>
                    </div>

                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Expose author name in posts
                        <input type="checkbox" className="pull-right" />
                      </label>
                      <p>
                        Allow the user to show his name in blog posts
                      </p>
                    </div>
                    {/* /.form-group */}

                    <h3 className="control-sidebar-heading">Chat Settings</h3>

                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Show me as online
                        <input type="checkbox" className="pull-right" />
                      </label>
                    </div>
                    {/* /.form-group */}

                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Turn off notifications
                        <input type="checkbox" className="pull-right" />
                      </label>
                    </div>
                    {/* /.form-group */}

                    <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Delete chat history
                        <a
                          href="javascript:void(0)"
                          className="text-red pull-right"
                        >
                          <i className="fa fa-trash-o" />
                        </a>
                      </label>
                    </div>
                    {/* /.form-group */}
                  </form>
                </div>
                {/* /.tab-pane */}
              </div>
            </aside>
            {/*{/* /.control-sidebar */}
            {/* Add the sidebar's background. This div must be placed
             immediately after the control sidebar */}
            <div className="control-sidebar-bg" />

          </div>
          {/* ./wrapper */}

        </div>
      </div>
    );
  }
}

export default connect()(Layout);

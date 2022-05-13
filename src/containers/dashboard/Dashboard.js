import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DoughnutChart from "../../components/charts/DonughtChart";
import BreadCrumb from "../../components/template/BreadCrumb";
import Header from "../../components/template/Header";

const Dashboard = () => {
  return (
    <div className="pace-done">
      <div>
        <Header />
        <BreadCrumb
          title="Dashboard"
          mainLinkTitle="Dashboard"
          mainLinkUrl="/dashboard"
          activeLink="Main"
        />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3">
                  <div className="dashboard-stat pending">
                    <div className="report-title">Pending </div>
                    <div className="report-stat">5</div>
                    <div className="stat-btn">
                      <Link>View </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dashboard-stat closed">
                    <div className="report-title">Closed </div>
                    <div className="report-stat">10</div>
                    <div className="stat-btn">
                      <Link>View </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dashboard-stat todays">
                    <div className="report-title">Todays Job </div>
                    <div className="report-stat">35</div>
                    <div className="stat-btn">
                      <Link>View </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dashboard-stat processing">
                    <div className="report-title">Processing Job </div>
                    <div className="report-stat">15</div>
                    <div className="stat-btn">
                      <Link>View </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Upcoming Updates</div>
                    </div>
                    <div className="card-body">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Job Post</th>
                            <th> Date</th>
                            <th> Time</th>
                            <th>Assigned Recruiter</th>
                            <th>Status</th>
                            <th> Action </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>JOB1001</td>
                            <td>26 Apr 2022</td>
                            <td>11:00</td>
                            <td>Ramesh</td>
                            <td> Pending </td>
                            <td>
                              <Link>
                                <i className="fa fa-eye"></i>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>JOB1001</td>
                            <td>26 Apr 2022</td>
                            <td>11:00</td>
                            <td>Ramesh</td>
                            <td> Pending </td>
                            <td>
                              <Link>
                                <i className="fa fa-eye"></i>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>JOB1001</td>
                            <td>26 Apr 2022</td>
                            <td>11:00</td>
                            <td>Ramesh</td>
                            <td> Pending </td>
                            <td>
                              <Link>
                                <i className="fa fa-eye"></i>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>JOB1001</td>
                            <td>26 Apr 2022</td>
                            <td>11:00</td>
                            <td>Ramesh</td>
                            <td> Pending </td>
                            <td>
                              <Link>
                                <i className="fa fa-eye"></i>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dashboard-stat">
                <DoughnutChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

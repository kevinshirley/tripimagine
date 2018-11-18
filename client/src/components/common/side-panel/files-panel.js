import React, { Component } from 'react';
import {Table, HeadCell, Cell, Row, HeadRow} from '../table';
import { Button } from '../common-button';

class FilesPanel extends Component {
  render() {
    return (
      <section className="files-panel">
        <div className="overlay">

          <Table>
            <HeadRow>
              <HeadCell>File</HeadCell>
              <HeadCell>Category</HeadCell>
              <HeadCell>Date</HeadCell>
              <HeadCell>Option</HeadCell>
            </HeadRow>
            <tbody>
              <Row>
                <Cell>file1.docx</Cell>
                <Cell>Itenarary</Cell>
                <Cell>Yesterday</Cell>
                <Cell><Button name="Download" icon="get_app" /></Cell>
              </Row>
              <Row>
                <Cell>file2.docx</Cell>
                <Cell>Finance</Cell>
                <Cell>Yesterday</Cell>
                <Cell><Button name="Download" icon="get_app" /></Cell>
              </Row>
              <Row>
                <Cell>file3.docx</Cell>
                <Cell>Itenarary</Cell>
                <Cell>2 Days Ago</Cell>
                <Cell><Button name="Download" icon="get_app" /></Cell>
              </Row>
              <Row>
                <Cell>file4.docx</Cell>
                <Cell>Itenarary</Cell>
                <Cell>2 Days Ago</Cell>
                <Cell><Button name="Download" icon="get_app" /></Cell>
              </Row>
            </tbody>
          </Table>
          
        </div>
      </section>
    );
  }
}

export default FilesPanel;
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const db = mysql.createConnection({
  host: 'azship',
  user: 'root',
  password: 'aZsh1p@2025',
  database: 'testlink'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/testcases/count', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM tcversions';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].count });
  });
});

app.get('/api/testcases/count/high-importance', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM tcversions WHERE importance = 3';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].count });
  });
});

app.get('/api/testcases/count/medium-importance', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM tcversions WHERE importance = 2';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].count });
  });
});

app.get('/api/testcases/count/low-importance', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM tcversions WHERE importance = 1';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].count });
  });
});

app.get('/api/testcases/duration/manual', (req, res) => {
  const query = 'SELECT SUM(estimated_exec_duration) AS total_duration FROM tcversions WHERE execution_type = 1';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ total_duration: results[0].total_duration });
  });
});

app.get('/api/testcases/duration/automated', (req, res) => {
  const query = 'SELECT SUM(estimated_exec_duration) AS total_duration FROM tcversions WHERE execution_type = 2';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ total_duration: results[0].total_duration });
  });
});

app.get('/api/testcases/count/manual', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM tcversions WHERE execution_type = 1';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].count });
  });
});

app.get('/api/testcases/count/automated', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM tcversions WHERE execution_type = 2';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].count });
  });
});

app.get('/api/testcases/count/keywords', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM keywords';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].count });
  });
});

app.get('/api/testcases/count/shipper', (req, res) => {
  const query = `
    WITH RECURSIVE all_folders AS (
      SELECT id
      FROM nodes_hierarchy
      WHERE id = 2
      UNION
      SELECT nh.id
      FROM nodes_hierarchy nh
      INNER JOIN all_folders af ON nh.parent_id = af.id
    )
    SELECT COUNT(*) AS total_testcases
    FROM nodes_hierarchy
    WHERE parent_id IN (SELECT id FROM all_folders) AND node_type_id = 3;
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].total_testcases });
  });
});

app.get('/api/testcases/count/transporter', (req, res) => {
  const query = `
    WITH RECURSIVE all_folders AS (
      SELECT id
      FROM nodes_hierarchy
      WHERE id = 3
      UNION
      SELECT nh.id
      FROM nodes_hierarchy nh
      INNER JOIN all_folders af ON nh.parent_id = af.id
    )
    SELECT COUNT(*) AS total_testcases
    FROM nodes_hierarchy
    WHERE parent_id IN (SELECT id FROM all_folders) AND node_type_id = 3;
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].total_testcases });
  });
});

app.get('/api/testcases/count/draft_status', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM tcversions WHERE status = 1;';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].count });
  });
});

app.get('/api/testcases/count/final_status', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM tcversions WHERE status = 7;';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].count });
  });
});

app.get('/api/project/name', (req, res) => {
  const query = 'SELECT name FROM nodes_hierarchy WHERE node_type_id = 1 LIMIT 1';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ name: results[0].name });
  });
});

app.get('/api/testcases/count/attachments', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM attachments;';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].count });
  });
});

app.get('/api/testcases/count/total_executions', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM executions;';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].count });
  });
});

app.get('/api/testcases/count/total_not_executed', (req, res) => {
  const query = ` 
    SELECT COUNT(*) AS total_nao_executed 
    FROM tcversions tc 
    LEFT JOIN executions e ON tc.id = e.tcversion_id 
    WHERE e.tcversion_id IS NULL; 
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json({ count: results[0].total_nao_executed });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://azship:${port}`);
});
package database

import (
	"database/sql"
	"encoding/json"
	"github.com/sqlc-dev/pqtype"
)

func NewNullString(s string) sql.NullString {
	if s == "" {
		return sql.NullString{Valid: false}
	}
	return sql.NullString{String: s, Valid: true}
}

func NewNullRawMessage(m json.RawMessage) pqtype.NullRawMessage {
	if m == nil {
		return pqtype.NullRawMessage{Valid: false}
	}
	return pqtype.NullRawMessage{RawMessage: m, Valid: true}
}

package main

import (
	"bufio"
	"html/template"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

type Note struct {
	Title       string
	Slug        string
	Description string
	PublishedAt time.Time
	UpdatedAt   time.Time
	Tags        []string
	IsDraft     bool
	Body        template.HTML
	SourcePath  string
}

const METADATA_INDICATOR string = "---"

func loadNote(slug string) (*Note, error) {
	note := &Note{}

	file, err := os.Open("content/" + slug + ".md")

	if err != nil {
		return nil, err
	}

	defer file.Close()

	metadata_ends := 0

	scanner := bufio.NewScanner(file)



	for scanner.Scan() {
		line := scanner.Text()

		if line == METADATA_INDICATOR {
			metadata_ends += 1
			if metadata_ends == 2 {
				break
			}
			continue
		}

		data := strings.Split(line, ": ")

		if len(data) != 2 {
			continue
		}

		switch key, value := data[0], data[1]; key {
		case "title":
			note.Title = strings.Trim(value, "\"")
		case "slug":
			note.Slug = value
		case "description":
			note.Description = strings.Trim(value, "\"")
		case "date":
			note.PublishedAt, _ = time.Parse(time.DateOnly, value)
		case "updated":
			note.UpdatedAt, _ = time.Parse(time.DateOnly, value)
		case "draft":
			note.IsDraft, _ = strconv.ParseBool(value)
		default:
			continue
		}
	}
	
	log.Printf("note: %+v", *note)
	
	return note, nil
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello world!"))
}

func aboutHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("This is the about handler!"))
}

func noteHandler(w http.ResponseWriter, r *http.Request) {
	slug := r.URL.Path[len("/notes/"):]

	log.Println("slug: ", slug)

	note, err := loadNote(slug)

	if err != nil {
		http.Redirect(w, r, "/", http.StatusFound)
		return
	}

	t, err := template.ParseFiles("web/templates/note.html")

	if err != nil {
		log.Fatal(err)
		return
	}

	t.Execute(w, note)
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", handler)
	mux.HandleFunc("/about", aboutHandler)
	mux.HandleFunc("/notes/", noteHandler)

	log.Println("listening on http://localhost:8080")

	if err := http.ListenAndServe(":8080", mux); err != nil {
		log.Fatal(err)
	}
}
